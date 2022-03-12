#!/bin/bash

# Shell script to generate documentation for the project into the docs folder

if ! jsdoc -c conf.json;
then
  echo "Build failed, jsdoc not found"
else
  echo 'Documentation generated sucesfully to "./docs/" folder' 
fi