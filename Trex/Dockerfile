FROM fusuf/whatsasena:latest

RUN git clone https://github.com/CTAchiya/sgmnxhm /root/sgmnxhm
WORKDIR /root/sgmnxhm/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
