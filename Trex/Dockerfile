FROM fusuf/whatsasena:latest

RUN git clone https://github.com/CTAchiya/xxxsant /root/xxxsant
WORKDIR /root/xxxsant/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
