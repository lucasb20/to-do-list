#!/bin/bash

flask --app api db init
flask --app api db migrate
flask --app api db upgrade
flask --app api run