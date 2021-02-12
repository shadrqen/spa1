docker build -t client:1.0.0 .
docker run -it --network host -v ${PWD}:/app --rm client:1.0.0
