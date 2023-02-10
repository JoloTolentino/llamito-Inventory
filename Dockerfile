FROM redis:5

WORKDIR /data
VOLUME /data

CMD ["redis-server","--appendonly","yes"]