.PHONY: all serve build clean

all: clean build

serve:
	@echo "Starting server..."
	docker run --rm -it -v $(shell pwd):/src -p 1313:1313 klakegg/hugo:0.81.0-ext-alpine serve

build:
	@echo "Building..."
	docker run --rm -it -v $(shell pwd):/src -p 1313:1313 klakegg/hugo:0.81.0-ext-alpine

clean:
	@echo "Cleaning up public directory..."
	rm -rf public