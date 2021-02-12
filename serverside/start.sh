docker build -t server .
docker run -it --network host -v ${PWD}:/app --rm server
