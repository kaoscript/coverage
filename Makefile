test:
ifeq ($(g),)
	node_modules/.bin/mocha --colors --check-leaks --reporter spec
else
	node_modules/.bin/mocha --colors --check-leaks --reporter spec -g "$(g)"
endif

build:
	./node_modules/.bin/kaoscript -c -t ecma-v5 -o lib src/compiler.ks
	./node_modules/.bin/kaoscript -c -t ecma-v5 -o lib -r src/compiler.ks=lib/compiler.js src/register.ks

comp:
	./node_modules/.bin/kaoscript -c -t ecma-v5 -o lib src/compiler.ks

clean:
	find . -type f \( -name "*.ksb" -o -name "*.ksh" -o -name "*.ksm" \) -delete

.PHONY: build test