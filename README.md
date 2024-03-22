# Listing Statistics Microservice
This microservice is designed to handle statistics related to listings, including collection, aggregation, storage, and retrieval of aggregated values for specific metrics. The service provides an HTTP API in JSON format for interaction

## Installation and Usage

1. Clone the repository:
```json
git clone https://github.com/Ruslan3571/listing-statistics-service.git
```

2. Navigate to the repository folder:
```json
cd listing-statistics-service
```
3. Install dependencies:
```json
npm install
```

4. Build and run the Docker containers:
```json
docker-compose up -d --build
```

## Access the Service API:
Access the service API at http://localhost:5555

## Endpoints for Interaction:
 - POST /:autoId: Submit metrics data for aggregation
 - GET /:autoId: Retrieve aggregated values for a specific autoId

## Directory Structure
 - src/: Contains the source code for the microservice
 - sql/: Contains SQL scripts for creating tables in the database

## API Reference
### POST /:autoId
Submit data for aggregation.

Request Body:
```json
{
  "typeId": 2
}
```
_typeId=1: Number of times the listing was viewed_

_typeId=2: Number of times the owner's phone number was viewed_

Response
```json
{
  "recordId": 1
}
```

### GET /:autoId
Retrieve aggregated values for a specific autoId.

Response
```json
{
  "listing": 7,
  "phone": 5
}
```

### GET /:autoId?typeId=1
Response
```json
{
  "listing": 7
}
```

### GET /:autoId?typeId=2
Response
```json
{
  "phone": 5
}
```

## Running Tests
Run unit tests using the following command:
```json
npm test
```

## Dependencies
Node.js
KOA framework
Docker
MariaDB
