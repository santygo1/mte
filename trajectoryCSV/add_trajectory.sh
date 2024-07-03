#!/bin/bash

n=$1

if [ -z "$n" ]; then
  echo "Ошибка: Необходимо передать номер в качестве аргумента."
  exit 1
fi

trajectory_body=$(cat * | awk -F ',' -v number="$n" '$2 == number && !seen[$3,$4]++ {printf "{\"lat\": %s, \"lon\": %s, \"timestamp\": \"%s\", \"speed\": 18.7, \"heading\": 30.5}\n", $3, $4, $8}' | sed '$!s/$/,/' | awk 'BEGIN{printf "{\n\"vesselId\": \"asdasd\",\n\"from\": \"source\",\n\"to\": \"destination\",\n\"coordinates\":[\n"} {print} END{printf "]\n}\n"}')

curl --header "Content-type: application/json" \
  --request POST \
  --data "$trajectory_body" \
  http://localhost:8080/api/v1/trajectories

