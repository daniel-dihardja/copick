DOCKER_COMPOSE  ?= docker-compose

UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S), Darwin)
	OPEN_CMD        ?= open
	DOCKER_HOST_IP  ?= $(shell echo $(DOCKER_HOST) | sed 's/tcp:\/\///' | sed 's/:[0-9.]*//')
else
	OPEN_CMD        ?= xdg-open
	DOCKER_HOST_IP  ?= 127.0.0.1
endif

bash:
	$(DOCKER_COMPOSE) run -p 3000:3000 api bash

up:
	$(DOCKER_COMPOSE) up -d;\

setup:
	node ./bin/setup

open:
	$(OPEN_CMD) http://$(DOCKER_HOST_IP):3000/explorer;\
	$(OPEN_CMD) http://$(DOCKER_HOST_IP):3000/admin;\
	$(OPEN_CMD) http://$(DOCKER_HOST_IP):5984/_utils;\

build:
	$(DOCKER_COMPOSE) build

update:
	$(DOCKER_COMPOSE) pull

down:
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) rm -fv

clean:
	docker rm $$(docker ps -a -q); \
	docker rmi $$(docker images -q -f dangling=true)
