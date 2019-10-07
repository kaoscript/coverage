/**
 * coverage.ks
 * Version 0.2.0
 * January 11th, 2017
 *
 * Copyright (c) 2017 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
#![error(off)]
#![rules(non-exhaustive)]

import 'kaoscript'

extern console, JSON

func $block(init, data, coverage, coverageName, location, file, node) { // {{{
	if data.kind == NodeKind::Block {
		data.statements = [].concat($location(init, location), $compile.statements(data.statements, coverage, coverageName, file, node))

		return data
	}
	else {
		return $location({
			kind: NodeKind::Block
			statements: [].concat($location(init, location), $compile.statements([data], coverage, coverageName, file, node))
		}, location)
	}
} // }}}

func $body(data?, location) { // {{{
	if data == null {
		return $location({
			kind: NodeKind::Block
			statements: []
		}, location)
	}
	else if data.kind == NodeKind::Block {
		return data
	}
	else {
		return $location({
			kind: NodeKind::Block
			statements: [
				{
					kind: NodeKind::ReturnStatement
					value: data
					start: data.start
					end: data.end
				}
			]
		}, location)
	}
} // }}}

const $compile = {
	compile(data, coverage, coverageName, file, node) { // {{{
		if $statements[data.kind]? {
			return $statements[data.kind](data, coverage, coverageName, file, node)
		}
		else if $expressions[data.kind]? {
			return $expressions[data.kind](data, coverage, coverageName, file, node)
		}
		else {
			throw new NotImplementedException(`Not supported kind "\(data.kind)"`, file, data.start.line)
		}
	} // }}}
	expression(data, coverage, coverageName, file, node) { // {{{
		if $expressions[data.kind]? {
			return $expressions[data.kind](data, coverage, coverageName, file, node)
		}
		else {
			throw new NotImplementedException(`Not supported kind "\(data.kind)"`, file, data.start.line)
		}
	} // }}}
	statements(statements, coverage, coverageName, file, node) { // {{{
		const result = []

		for statement in statements {
			let sid = coverage.statementMap.length + 1

			coverage.statementMap.push({
				start: {
					line: statement.start.line
					column: statement.start.column - 1
				}
				end: {
					line: statement.end.line
					column: statement.end.column - 1
				}
			})

			result.push($location({
				kind: NodeKind::UnaryExpression
				operator: {
					kind: UnaryOperatorKind::IncrementPostfix
				}
				argument: {
					kind: NodeKind::MemberExpression
					modifiers: [
						{
							kind: ModifierKind::Computed
						}
					]
					object: {
						kind: NodeKind::MemberExpression
						modifiers: []
						object: {
							kind: NodeKind::MemberExpression
							modifiers: [
								{
									kind: ModifierKind::Computed
								}
							]
							object: {
								kind: NodeKind::Identifier
								name: coverageName
							}
							property: {
								kind: NodeKind::Literal
								value: node.reducePath(file)
							}
						}
						property: {
							kind: NodeKind::Identifier
							name: 's'
						}
					}
					property: {
						kind: NodeKind::NumericExpression
						value: sid
					}
				}
				attributes: []
			}, statement))

			//console.log('statement', statement.kind)
			if $statements[statement.kind]? {
				result.push($statements[statement.kind](statement, coverage, coverageName, file, node))
			}
			else if $expressions[statement.kind]? {
				result.push($expressions[statement.kind](statement, coverage, coverageName, file, node))
			}
			else {
				throw new NotImplementedException(`Not supported kind "\(statement.kind)"`, file, statement.start.line)
			}
		}

		return result
	} // }}}
}

func $constructor(members, data, coverage, coverageName, file, node) { // {{{
	let fid = coverage.fnMap.length + 1

	coverage.fnMap.push({
		name: data.name.name
		line: data.start.line
		loc: {
			start: {
				line: data.start.line
				column: data.start.column - 1
			}
			end: {
				line: data.end.line
				column: data.end.column - 1
			}
		}
	})

	const fields = {}
	for member in members {
		if member.kind == NodeKind::FieldDeclaration {
			fields[member.name.name] = true

			if member.name.name[0] == '_' {
				fields[member.name.name.substr(1)] = true
			}
		}
	}

	data.body = $location({
		kind: NodeKind::Block
		statements: [
			$location({
				kind: NodeKind::CallExpression
				modifiers: []
				scope: {
					kind: ScopeKind::This
				}
				callee: {
					kind: NodeKind::Identifier
					name: 'super'
					start: data.start
					end: data.end
				}
				arguments: []
			}, data)
			$location({
				kind: NodeKind::UnaryExpression
				operator: {
					kind: UnaryOperatorKind::IncrementPostfix
				}
				argument: {
					kind: NodeKind::MemberExpression
					modifiers: [
						{
							kind: ModifierKind::Computed
						}
					]
					object: {
						kind: NodeKind::MemberExpression
						modifiers: []
						object: {
							kind: NodeKind::MemberExpression
							modifiers: [
								{
									kind: ModifierKind::Computed
								}
							]
							object: {
								kind: NodeKind::Identifier
								name: coverageName
							}
							property: {
								kind: NodeKind::Literal
								value: node.reducePath(file)
							}
						}
						property: {
							kind: NodeKind::Identifier
							name: 'f'
						}
					}
					property: {
						kind: NodeKind::NumericExpression
						value: fid
					}
				}
				attributes: []
			}, data)
		]
	}, data)

	return data
} // }}}

const $expressions = {
	`\(NodeKind::ArrayComprehension)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ArrayExpression)`(data, coverage, coverageName, file, node) { // {{{
		data.values = [$compile.expression(value, coverage, coverageName, file, node) for value in data.values]

		return data
	} // }}}
	`\(NodeKind::ArrayRange)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::AwaitExpression)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::BinaryExpression)`(data, coverage, coverageName, file, node) { // {{{
		if data.operator.kind == BinaryOperatorKind::And || data.operator.kind == BinaryOperatorKind::Or {
			let bid = coverage.branchMap.length + 1

			coverage.branchMap.push({
				type: 'binary-expr'
				line: data.start.line
				locations: [
					{
						start: {
							line: data.left.start.line
							column: data.left.start.column - 1
						}
						end: {
							line: data.left.end.line
							column: data.left.end.column - 1
						}
					}
					{
						start: {
							line: data.right.start.line
							column: data.right.start.column - 1
						}
						end: {
							line: data.right.end.line
							column: data.right.end.column - 1
						}
					}
				]
			})

			data.left = $sequence($increment.branch(bid, 0, coverageName, data.left, file, node), data.left, coverage, coverageName, file, node)
			data.right = $sequence($increment.branch(bid, 1, coverageName, data.right, file, node), data.right, coverage, coverageName, file, node)
		}
		else if data.operator.kind == BinaryOperatorKind::Assignment {
			data.right = $compile.expression(data.right, coverage, coverageName, file, node)
		}
		else {
			data.left = $compile.expression(data.left, coverage, coverageName, file, node)
			data.right = $compile.expression(data.right, coverage, coverageName, file, node)
		}

		return data
	} // }}}
	`\(NodeKind::CallExpression)`(data, coverage, coverageName, file, node) { // {{{
		data.callee = $compile.expression(data.callee, coverage, coverageName, file, node)
		data.arguments = [$compile.expression(argument, coverage, coverageName, file, node) for argument in data.arguments]

		return data
	} // }}}
	`\(NodeKind::CallMacroExpression)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ComparisonExpression)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ConditionalExpression)`(data, coverage, coverageName, file, node) { // {{{
		let bid = coverage.branchMap.length + 1

		coverage.branchMap.push({
			type: 'cond-expr'
			line: data.start.line
			locations: [
				{
					start: {
						line: data.whenTrue.start.line
						column: data.whenTrue.start.column - 1
					}
					end: {
						line: data.whenTrue.end.line
						column: data.whenTrue.end.column - 1
					}
				}
				{
					start: {
						line: data.whenFalse.start.line
						column: data.whenFalse.start.column - 1
					}
					end: {
						line: data.whenFalse.end.line
						column: data.whenFalse.end.column - 1
					}
				}
			]
		})

		data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

		data.whenTrue = $sequence($increment.branch(bid, 0, coverageName, data.whenTrue, file, node), data.whenTrue, coverage, coverageName, file, node)
		data.whenFalse = $sequence($increment.branch(bid, 1, coverageName, data.whenFalse, file, node), data.whenFalse, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::CreateExpression)`(data, coverage, coverageName, file, node) { // {{{
		data.class = $compile.expression(data.class, coverage, coverageName, file, node)
		data.arguments = [$compile.expression(argument, coverage, coverageName, file, node) for argument in data.arguments]

		return data
	} // }}}
	`\(NodeKind::CurryExpression)`(data, coverage, coverageName, file, node) { // {{{
		data.callee = $compile.expression(data.callee, coverage, coverageName, file, node)

		if data.scope.kind == ScopeKind::Argument {
			data.scope.value = $compile.expression(data.scope.value, coverage, coverageName, file, node)
		}

		data.arguments = [$compile.expression(argument, coverage, coverageName, file, node) for argument in data.arguments]

		return data
	} // }}}
	`\(NodeKind::EnumExpression)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ExportNamedSpecifier)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::FunctionExpression)`(data, coverage, coverageName, file, node) => $function(data, coverage, coverageName, file, node)
	`\(NodeKind::IfExpression)`(data, coverage, coverageName, file, node) { // {{{
		let bid = coverage.branchMap.length + 1

		if data.whenFalse? {
			coverage.branchMap.push({
				type: 'cond-expr'
				line: data.start.line
				locations: [
					{
						start: {
							line: data.whenTrue.start.line
							column: data.whenTrue.start.column - 1
						}
						end: {
							line: data.whenTrue.end.line
							column: data.whenTrue.end.column - 1
						}
					}
					{
						start: {
							line: data.whenFalse.start.line
							column: data.whenFalse.start.column - 1
						}
						end: {
							line: data.whenFalse.end.line
							column: data.whenFalse.end.column - 1
						}
					}
				]
			})

			data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

			data.whenTrue = $sequence($increment.branch(bid, 0, coverageName, data.whenTrue, file, node), data.whenTrue, coverage, coverageName, file, node)
			data.whenFalse = $sequence($increment.branch(bid, 1, coverageName, data.whenFalse, file, node), data.whenFalse, coverage, coverageName, file, node)
		}
		else {
			coverage.branchMap.push({
				type: 'cond-expr'
				line: data.start.line
				locations: [
					{
						start: {
							line: data.start.line
							column: data.start.column - 1
						}
						end: {
							line: data.start.line
							column: data.start.column - 1
						}
					}
					{
						start: {
							line: data.start.line
							column: data.start.column - 1
						}
						end: {
							line: data.start.line
							column: data.start.column - 1
						}
					}
				]
			})

			data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

			data.whenTrue = $sequence($increment.branch(bid, 0, coverageName, data.whenTrue, file, node), data.whenTrue, coverage, coverageName, file, node)
		}

		return data
	} // }}}
	`\(NodeKind::MemberExpression)`(data, coverage, coverageName, file, node) { // {{{
		data.object = $compile.expression(data.object, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::NumericExpression)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::Identifier)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::LambdaExpression)`(data, coverage, coverageName, file, node) => $function(data, coverage, coverageName, file, node)
	`\(NodeKind::Literal)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ObjectExpression)`(data, coverage, coverageName, file, node) { // {{{
		let properties = data.properties

		data.properties = []

		for property in properties {
			data.properties.push($compile.expression(property, coverage, coverageName, file, node))
		}

		return data
	} // }}}
	`\(NodeKind::ObjectMember)`(data, coverage, coverageName, file, node) { // {{{
		data.value = $compile.expression(data.value, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::PolyadicExpression)`(data, coverage, coverageName, file, node) { // {{{
		if data.operator.kind == BinaryOperatorKind::And || data.operator.kind == BinaryOperatorKind::Or {
			let bid = coverage.branchMap.length + 1

			coverage.branchMap.push(branch = {
				type: 'binary-expr'
				line: data.start.line
				locations: []
			})

			let operands = data.operands

			data.operands = []

			for operand, index in operands {
				branch.locations.push({
					start: {
						line: operand.start.line
						column: operand.start.column - 1
					}
					end: {
						line: operand.end.line
						column: operand.end.column - 1
					}
				})

				data.operands.push($sequence($increment.branch(bid, index, coverageName, operand, file, node), operand, coverage, coverageName, file, node))
			}
		}
		else {
			data.operands = [$compile.expression(operand, coverage, coverageName, file, node) for operand in data.operands]
		}

		return data
	} // }}}
	`\(NodeKind::RegularExpression)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ShorthandProperty)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::TemplateExpression)`(data, coverage, coverageName, file, node) { // {{{
		data.elements = [$compile.expression(element, coverage, coverageName, file, node) for element in data.elements]

		return data
	} // }}}
	`\(NodeKind::ThisExpression)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::TypeReference)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::UnaryExpression)`(data, coverage, coverageName, file, node) { // {{{
		data.argument = $compile.expression(data.argument, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::UnlessExpression)`(data, coverage, coverageName, file, node) { // {{{
		let bid = coverage.branchMap.length + 1

		coverage.branchMap.push({
			type: 'cond-expr'
			line: data.start.line
			locations: [
				{
					start: {
						line: data.start.line
						column: data.start.column - 1
					}
					end: {
						line: data.start.line
						column: data.start.column - 1
					}
				}
				{
					start: {
						line: data.start.line
						column: data.start.column - 1
					}
					end: {
						line: data.start.line
						column: data.start.column - 1
					}
				}
			]
		})

		data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

		data.whenFalse = $sequence($increment.branch(bid, 0, coverageName, data.whenFalse, file, node), data.whenFalse, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::VariableDeclaration)`(data, coverage, coverageName, file, node) { // {{{
		data.init = $compile.expression(data.init, coverage, coverageName, file, node)

		return data
	} // }}}
}

func $function(data, coverage, coverageName, file, node) { // {{{
	let fid = coverage.fnMap.length + 1

	coverage.fnMap.push({
		name: data.name?.name ?? `(anonymous_\(fid))`
		line: data.start.line
		loc: {
			start: {
				line: data.start.line
				column: data.start.column - 1
			}
			end: {
				line: data.end.line
				column: data.end.column - 1
			}
		}
	})

	data.body = $block({
		kind: NodeKind::UnaryExpression
		operator: {
			kind: UnaryOperatorKind::IncrementPostfix
		}
		argument: {
			kind: NodeKind::MemberExpression
			modifiers: [
				{
					kind: ModifierKind::Computed
				}
			]
			object: {
				kind: NodeKind::MemberExpression
				modifiers: []
				object: {
					kind: NodeKind::MemberExpression
					modifiers: [
						{
							kind: ModifierKind::Computed
						}
					]
					object: {
						kind: NodeKind::Identifier
						name: coverageName
					}
					property: {
						kind: NodeKind::Literal
						value: node.reducePath(file)
					}
				}
				property: {
					kind: NodeKind::Identifier
					name: 'f'
				}
			}
			property: {
				kind: NodeKind::NumericExpression
				value: fid
			}
		}
		attributes: []
	}, $body(data.body, data), coverage, coverageName, data, file, node)

	return data
} // }}}

func $if(condition, whenTrue, coverage, coverageName, file, node) { // {{{
	let data = {
		kind: NodeKind::IfStatement
		condition: condition
		start: condition.start
		end: whenTrue.end
	}

	if whenTrue.kind == NodeKind::Block {
		data.whenTrue = whenTrue
	}
	else {
		data.whenTrue = {
			kind: NodeKind::Block
			statements: [whenTrue]
		}
	}

	return $statements[NodeKind::IfStatement](data, coverage, coverageName, file, node)
} // }}}

const $increment = {
	branch(bid, eid, coverageName, data, file, node) { // {{{
		return $location({
			kind: NodeKind::UnaryExpression
			operator: {
				kind: UnaryOperatorKind::IncrementPostfix
			}
			argument: {
				kind: NodeKind::MemberExpression
				modifiers: [
					{
						kind: ModifierKind::Computed
					}
				]
				object: {
					kind: NodeKind::MemberExpression
					modifiers: [
						{
							kind: ModifierKind::Computed
						}
					]
					object: {
						kind: NodeKind::MemberExpression
						modifiers: []
						object: {
							kind: NodeKind::MemberExpression
							modifiers: [
								{
									kind: ModifierKind::Computed
								}
							]
							object: {
								kind: NodeKind::Identifier
								name: coverageName
							}
							property: {
								kind: NodeKind::Literal
								value: node.reducePath(file)
							}
						}
						property: {
							kind: NodeKind::Identifier
							name: 'b'
						}
					}
					property: {
						kind: NodeKind::NumericExpression
						value: bid
					}
				}
				property: {
					kind: NodeKind::NumericExpression
					value: eid
				}
			}
			attributes: []
		}, data)
	} // }}}
}

func $location(data, location: Dictionary) { // {{{
	data.start = {
		line: location.start.line
	}
	data.end = {
		line: location.end.line
	}

	return data
} // }}}

func $location(data, lineStart: Number, lineEnd: Number = lineStart) { // {{{
	data.start = {
		line: lineStart
	}
	data.end = {
		line: lineEnd
	}

	return data
} // }}}

func $sequence(init, data, coverage, coverageName, file, node) { // {{{
	if data.kind == NodeKind::SequenceExpression {
		let expressions = data.expressions

		data.expressions = [init]

		for expression in expressions {
			data.expressions.push($compile.expression(expression, coverage, coverageName, file, node))
		}

		return data
	}
	else {
		return {
			kind: NodeKind::SequenceExpression
			expressions: [init, $compile.expression(data, coverage, coverageName, file, node)]
		}
	}
} // }}}

const $statements = {
	`\(NodeKind::BreakStatement)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ClassDeclaration)`(data, coverage, coverageName, file, node) { // {{{
		let members = data.members

		data.members = []

		for member in members {
			switch member.kind {
				NodeKind::FieldDeclaration => {
					if member.defaultValue? {
						member.defaultValue = $compile.expression(member.defaultValue, coverage, coverageName, file, node)
					}

					data.members.push(member)
				}
				NodeKind::MethodDeclaration => {
					if data.extends? && member.name.name == 'constructor' && !?member.body {
						data.members.push($constructor(members, member, coverage, coverageName, file, node))
					}
					else {
						data.members.push($statements[NodeKind::FunctionDeclaration](member, coverage, coverageName, file, node))
					}
				}
				NodeKind::MacroDeclaration => {
					data.members.push(member)
				}
				=> {
					throw new NotImplementedException(`Not supported kind "\(member.kind)"`, file, member.start.line)
				}
			}
		}

		return data
	} // }}}
	`\(NodeKind::ContinueStatement)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::DestroyStatement)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::DiscloseDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::DoUntilStatement)`(data, coverage, coverageName, file, node) { // {{{
		data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

		data.body.statements = $compile.statements(data.body.statements, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::DoWhileStatement)`(data, coverage, coverageName, file, node) { // {{{
		data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

		data.body.statements = $compile.statements(data.body.statements, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::EnumDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ExportDeclaration)`(data, coverage, coverageName, file, node) { // {{{
		data.declarations = [$compile.compile(declaration, coverage, coverageName, file, node) for declaration in data.declarations]

		return data
	} // }}}
	`\(NodeKind::ExportDeclarationSpecifier)`(data, coverage, coverageName, file, node) { // {{{
		data.declaration = $compile.compile(data.declaration, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::ExternDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ExternOrRequireDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ForFromStatement)`(data, coverage, coverageName, file, node) { // {{{
		data.from = $compile.expression(data.from, coverage, coverageName, file, node)

		if data.til? {
			data.til = $compile.expression(data.til, coverage, coverageName, file, node)
		}
		else {
			data.to = $compile.expression(data.to, coverage, coverageName, file, node)
		}

		if data.by? {
			data.by = $compile.expression(data.by, coverage, coverageName, file, node)
		}

		if data.when? {
			data.body = $if(data.when, data.body, coverage, coverageName, file, node)

			delete data.when
		}
		else {
			data.body.statements = $compile.statements(data.body.statements, coverage, coverageName, file, node)
		}

		return data
	} // }}}
	`\(NodeKind::ForInStatement)`(data, coverage, coverageName, file, node) { // {{{
		if data.when? {
			data.body = $if(data.when, data.body, coverage, coverageName, file, node)

			delete data.when
		}
		else {
			data.body.statements = $compile.statements(data.body.statements, coverage, coverageName, file, node)
		}

		return data
	} // }}}
	`\(NodeKind::ForOfStatement)`(data, coverage, coverageName, file, node) { // {{{
		if data.when? {
			data.body = $if(data.when, data.body, coverage, coverageName, file, node)

			delete data.when
		}
		else {
			data.body.statements = $compile.statements(data.body.statements, coverage, coverageName, file, node)
		}

		return data
	} // }}}
	`\(NodeKind::FunctionDeclaration)`(data, coverage, coverageName, file, node) => $function(data, coverage, coverageName, file, node)
	`\(NodeKind::IfStatement)`(data, coverage, coverageName, file, node) { // {{{
		let bid = coverage.branchMap.length + 1

		let loc = {
			start: {
				line: data.start.line
				column: data.start.column - 1
			}
			end: {
				line: data.start.line
				column: data.start.column - 1
			}
		}

		coverage.branchMap.push({
			type: 'if'
			line: data.start.line
			locations: [loc, loc]
		})

		data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

		data.whenTrue = $block($increment.branch(bid, 0, coverageName, data.whenTrue, file, node), data.whenTrue, coverage, coverageName, loc, file, node)

		if data.whenFalse? {
			data.whenFalse = $block($increment.branch(bid, 1, coverageName, data.whenFalse, file, node), data.whenFalse, coverage, coverageName, loc, file, node)
		}

		return data
	} // }}}
	`\(NodeKind::ImplementDeclaration)`(data, coverage, coverageName, file, node) { // {{{
		let properties = data.properties

		data.properties = []

		for property in properties {
			switch property.kind {
				NodeKind::FieldDeclaration => {
					if property.defaultValue? {
						property.defaultValue = $compile.expression(property.defaultValue, coverage, coverageName, file, node)
					}

					data.properties.push(property)
				}
				NodeKind::MethodDeclaration => {
					data.properties.push($statements[NodeKind::FunctionDeclaration](property, coverage, coverageName, file, node))
				}
				=> {
					throw new NotImplementedException(`Not supported kind "\(property.kind)"`, file, property.start.line)
				}
			}
		}

		return data
	} // }}}
	`\(NodeKind::ImportDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::IncludeDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::MacroDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::NamespaceDeclaration)`(data, coverage, coverageName, file, node) { // {{{
		data.statements = $compile.statements(data.statements, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::RequireDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::RequireOrExternDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::RequireOrImportDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::ReturnStatement)`(data, coverage, coverageName, file, node) { // {{{
		if data.value? {
			data.value = $compile.expression(data.value, coverage, coverageName, file, node)
		}

		return data
	} // }}}
	`\(NodeKind::SwitchStatement)`(data, coverage, coverageName, file, node) { // {{{
		let bid = coverage.branchMap.length + 1

		const branch = {
			type: 'switch'
			line: data.start.line
			locations: []
		}

		coverage.branchMap.push(branch)

		data.expression = $compile.expression(data.expression, coverage, coverageName, file, node)

		let loc
		for clause, index in data.clauses {
			loc = {
				start: {
					line: clause.start.line
					column: clause.start.column - 1
				}
				end: {
					line: clause.end.line
					column: clause.end.column - 1
				}
			}

			clause.body = $block($increment.branch(bid, index, coverageName, clause.body, file, node), clause.body, coverage, coverageName, loc, file, node)

			branch.locations.push(loc)
		}

		return data
	} // }}}
	`\(NodeKind::ThrowStatement)`(data, coverage, coverageName, file, node) { // {{{
		data.value = $compile.expression(data.value, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::TryStatement)`(data, coverage, coverageName, file, node) { // {{{
		data.body.statements = $compile.statements(data.body.statements, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::TypeAliasDeclaration)`(data, coverage, coverageName, file, node) => data
	`\(NodeKind::UnlessStatement)`(data, coverage, coverageName, file, node) { // {{{
		let bid = coverage.branchMap.length + 1

		let loc = {
			start: {
				line: data.start.line
				column: data.start.column - 1
			}
			end: {
				line: data.start.line
				column: data.start.column - 1
			}
		}

		coverage.branchMap.push({
			type: 'if'
			line: data.start.line
			locations: [loc, loc]
		})

		data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

		data.whenFalse = $block($increment.branch(bid, 0, coverageName, data.whenFalse, file, node), data.whenFalse, coverage, coverageName, loc, file, node)

		return data
	} // }}}
	`\(NodeKind::UntilStatement)`(data, coverage, coverageName, file, node) { // {{{
		data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

		data.body.statements = $compile.statements(data.body.statements, coverage, coverageName, file, node)

		return data
	} // }}}
	`\(NodeKind::VariableDeclaration)`(data, coverage, coverageName, file, node) { // {{{
		if data.init? {
			data.init = $compile.expression(data.init, coverage, coverageName, file, node)
		}

		return data
	} // }}}
	`\(NodeKind::WhileStatement)`(data, coverage, coverageName, file, node) { // {{{
		data.condition = $compile.expression(data.condition, coverage, coverageName, file, node)

		data.body.statements = $compile.statements(data.body.statements, coverage, coverageName, file, node)

		return data
	} // }}}
}

class CoverageCompiler extends Compiler {
	private {
		_coverageName
		_instrument: Boolean	= false
	}
	instrument(@coverageName = '__ks_coverage') { // {{{
		@instrument = true

		return this
	} // }}}
	compile(data = null) { // {{{
		if @instrument {
			@module = new CoverageModule(data ?? @readFile(), @coverageName, this, @file)
		}
		else {
			@module = new Module(data ?? @readFile(), this, @file)
		}

		@module.compile()

		@fragments = @module.toFragments()

		return this
	} // }}}
}

class CoverageModule extends Module {
	private {
		_addCoverageVariable: Boolean	= true
		_coverageName
		_coverages						= []
		excludeFile: Function			= file => false
		reducePath: Function			= path => path
	}
	constructor(@data, @coverageName, @compiler, @file) { // {{{
		@coverageName = coverageName

		if compiler._options.excludeFile is Function {
			@excludeFile = compiler._options.excludeFile
		}

		if compiler._options.reducePath is Function {
			@reducePath = compiler._options.reducePath
		}

		super(data, compiler, file)
	} // }}}
	parse(data, file) { // {{{
		if @excludeFile(file) {
			data = super.parse(data, file)
		}
		else {
			@coverages.push(coverage = {
				path: @reducePath(file)
				statementMap: []
				branchMap: []
				fnMap: []
			})

			data = super.parse(data, file)

			data.body = $compile.statements(data.body, coverage, @coverageName, file, this)

			if @addCoverageVariable {
				data.body.unshift($location({
					kind: NodeKind::ExternDeclaration
					declarations: [
						{
							kind: NodeKind::VariableDeclarator
							modifiers: []
							name: {
								kind: NodeKind::Identifier
								name: @coverageName
							}
						}
					]
					attributes: []
				}, 1))

				@addCoverageVariable = false
			}
		}

		return data
	} // }}}
	toFragments() { // {{{
		const header = new FragmentBuilder(0)

		header.line(`var \(@coverageName) = (function(_export) {\n\treturn typeof _export.\(@coverageName) === 'undefined' ? _export.\(@coverageName) = {} : _export.\(@coverageName);\n})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this)`)

		for coverage in @coverages {
			@toCoverageFragments(header, coverage)
		}

		return header.toArray().concat(super.toFragments())
	} // }}}
	private toCoverageFragments(fragments, coverage) { // {{{
		const line = fragments.newLine()

		line.code(`if(!\(@coverageName)["\(coverage.path)"]) {\n`)
		line.code(`\t\(@coverageName)["\(coverage.path)"] = {`)

		line.code(`"path":"\(coverage.path)",`)

		line.code(`"s":{`)
		for i from 1 to coverage.statementMap.length {
			line.code(`,`) if i > 1

			line.code(`"\(i)":0`)
		}
		line.code(`},`)

		line.code(`"b":{`)
		for i from 1 to coverage.branchMap.length {
			line.code(`,`) if i > 1

			line.code(`"\(i)":[`)

			for j from 0 til coverage.branchMap[i - 1].locations.length {
				line.code(`,`) if j != 0

				line.code(`0`)
			}

			line.code(`]`)
		}
		line.code(`},`)

		line.code(`"f":{`)
		for i from 1 to coverage.fnMap.length {
			line.code(`,`) if i > 1

			line.code(`"\(i)":0`)
		}
		line.code(`},`)

		line.code(`"statementMap":{`)
		for i from 0 til coverage.statementMap.length {
			line.code(`,`) if i > 0

			line.code(`"\(i + 1)":\(JSON.stringify(coverage.statementMap[i]))`)
		}
		line.code(`},`)

		line.code(`"branchMap":{`)
		for i from 0 til coverage.branchMap.length {
			line.code(`,`) if i > 0

			line.code(`"\(i + 1)":\(JSON.stringify(coverage.branchMap[i]))`)
		}
		line.code(`},`)

		line.code(`"fnMap":{`)
		for i from 0 til coverage.fnMap.length {
			line.code(`,`) if i > 0

			line.code(`"\(i + 1)":\(JSON.stringify(coverage.fnMap[i]))`)
		}
		line.code(`}`)

		line.code(`};\n`)
		line.code(`}`)
		line.done()
	} // }}}
}

export CoverageCompiler => Compiler, extensions, getBinaryPath, getHashPath, isUpToDate