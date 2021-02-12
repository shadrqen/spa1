docker build -t db .
docker run -it --network host -v ${PWD}:/app --rm db
