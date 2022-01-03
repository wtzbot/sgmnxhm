FROM fusuf/whatsasena:latest

RUN git clone https://github.com/CTAchiya/xmas /root/xmas
WORKDIR /root/xmas/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
