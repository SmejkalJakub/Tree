#!/bin/bash

# Shell script to generate documentation for the project into the docs folder

# Base directiry with all the tests
directory="./tests"

# Get all the files 
scripts=$(find $directory -type f -name "*.mjs")
scripts=($scripts)

# Get all the desired outputs
outputs=$(find $directory -type f -name "*.txt")
outputs=($outputs)

# Declare the dictionary for th tests
declare -A tests_dict

# Number of successful and failed tests
succ_tests=0
fail_tests=0

# Get desired output for each test
for script in "${scripts[@]}"
do
    script_name=$(basename $script)
    name_without_extension=${script_name%.*}
    for output in "${outputs[@]}"
    do
        output_name=$(basename $output)
        output_name_without_extension=${output_name%.*}
        if [[ "${output_name_without_extension}" == "${name_without_extension}" ]]
        then
            tests_dict[$script]=$output
            break
        fi
    done
done

# Run the tests
for key in "${!tests_dict[@]}"; do
    echo "--------------------------------------------------------------"
    test_name=$(basename $key)
    test_name_without_extension=${test_name%.*} 
    echo "Doing test: $test_name_without_extension..."
    DIFF=$(diff -u --strip-trailing-cr -w -b ${tests_dict[$key]} <(node $key))

    if [ "$DIFF" ] && [ $? == 0 ] 
    then
        ((fail_tests=fail_tests+1))
        echo "Test failed"
    else
        ((succ_tests=succ_tests+1))
        echo "Test successful"
    fi
done

# Simple result printout
echo "=============================================================="
echo "Successful tests: ${succ_tests}"
echo "Failed tests: ${fail_tests}"
echo "=============================================================="