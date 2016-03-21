# Frontend Server for I'm Hungry - Your Local Food Porn
http://devpost.com/software/i-m-hungry

# Warning!!
This project no longer works. Yelp noticed the crawling server and blocked it. It was built over one weekend, and didn't have time to go through thorough tests.

## For Development (OSX)
```bash
1. npm install
2. npm run dev
```

## For Production (Ubuntu 14.04 Dockerfile)
```bash
1. sudo docker build -t imhungry_fe_img .
2. sudo docker run \
                -name imhungry_fe_instance \
                -p 3000:3000 \
                -i -t imhungry_fe_img

```

## TODO:
- Add script to handle logs for production
- Add tests
