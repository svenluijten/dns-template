name: Push DNS changes

on:
  push:
    branches:
      - main

jobs:
  push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Push DNS changes
        uses: koenrh/dnscontrol-action@v3
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        with:
          args: push
