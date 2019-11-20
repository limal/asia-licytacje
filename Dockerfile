FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN yarn global add parcel-bundler
RUN yarn
RUN yarn build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
EXPOSE 80
COPY --from=builder /app/dist .
CMD ["serve", "-p", "80", "-s", "."]