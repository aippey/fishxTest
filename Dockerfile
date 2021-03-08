FROM 10.45.80.1/zcm9/zcm-openresty:1.15.8.1_20190806
MAINTAINER Fish-team

COPY ./build/ /usr/local/openresty/nginx/html/
COPY ./nginx.conf /usr/local/openresty/nginx/conf/
WORKDIR /root/
VOLUME /root/logs
EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/tini", "-g", "--", "docker-entrypoint.sh"]
CMD ["start"]