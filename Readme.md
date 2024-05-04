# Koinx Blockchain + Backend assignment

### Project setup 

After cloning the repo:
```
npm  install
node server.js
```
(In this case, I am making convenient for you by pushing the environment variable file already so that you don't have to make one).
Database used: MongoDb Atlas 

### Test through curl commands

Test address: 0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3
Or skip to the results screenshots below to save time.

- Fetching transactions of an address
```
curl http://localhost:3000/api/v1/transactions/0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3
```

- Fetching current eth balance of an address: 
```
curl http://localhost:3000/api/v1/addressBalance/0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3
```

- Fetching Current Eth price: 
```
curl http://localhost:3000/api/v1/ethPrice
```

## Algorithms :

#### Saving Transactions:

- New set of transactions fetched through API provided is responded by server. And asynchronously updated to database.

- Rather than storing Address: transactions[] ( key: value), I am simply storing all the transactions in a collection because transaction schema already contains "from" and "to" address, which is very easy to filter out.

- Now that its easy to filter out txns of a particular address, its easy to update them as well. Using the API provided, I get all the transactions in where address sent eth to a diff address ( basically api fetches txns with "from" field = address provided as param.). I delete them all and replace them with new set of txns. So whenever you call '/api/v1/transactions/:address', transactions are updated. 

#### Address Balance:

- Simple algorithm to assess all the transactions stored of every address in DB. Then filtering out all the txns with "from" and "to" = address provided. And then performing basic computation. NOTE: Value of txn provided in api response is in WEI unit (10**18 times of ETH), it was converted to ETH and balance was computed.

#### Cron job: 
- Cron jobs were used to fetch the Eth price every 10 minutes. Moreover, if you need to find it manually, I have made a custom endpoint as well. ( See ss) 

## Result Sceenshots

- Transactions of an address ( Task 1 )
![txns](/examples/ss/txns.png)

- Cron Job ( Task 2 )
![cron](/examples/ss/cron.png)

- ETH Price through endpoint ( Task 2 )
![eth](/examples/ss/ethPrice.png)

- Address Balance 
The reason its negative, because our database only contains the transactions where address provided only sent ETH, not received. 
![balance](/examples/ss/addressBalance.png)

## Made by Vansh Bulani
Checkout my blogs and portfolio: [Blogs](https://www.vanshbulani.info/blogs) 