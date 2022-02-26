#!/bin/bash

directory="./tests"

script_files=$(find $directory -type f -name "*.mjs")
script_files=($script_files)

output_files=$(find $directory -type f -name "*.txt")
output_files=($output_files)

declare -A tests_dict

succ_tests=0
fail_tests=0

for script in "${script_files[@]}"
do
    script_name=$(basename $script)
    name_without_extension=${script_name%.*}
    for output in "${output_files[@]}"
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
echo "=============================================================="
echo "Successful tests: ${succ_tests}"
echo "Failed tests: ${fail_tests}"
echo "=============================================================="