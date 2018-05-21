help:
	@echo 'Makefile for Quotes                                                   '
	@echo '                                                                      '
	@echo 'Usage:                                                                '
	@echo '   setup                   Setup all containers                       '
	@echo '   reset                   Delete all containers                      '
	@echo '   run                     Run all container localy                   '
	@echo '   deploy                  Deploy app to heroku                       '

setup:
	docker-compose build api
	docker-compose run --rm api rails db:create db:migrate db:seed

reset:
	docker-compose down

run:
	docker-compose up

.PHONY: setup, reset, run
