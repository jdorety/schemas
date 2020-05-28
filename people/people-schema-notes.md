# People/places schema

## Schemas

- Person
- Residence
- Business
- City
- State (will try as tag to start)

## Person

| name            | type                                   |
| --------------- | -------------------------------------- |
| first_name      | string                                 |
| last_name       | string                                 |
| age             | int                                    |
| ss_num          | string (unique)                        |
| home            | ref ( residences, restrictCollections) |
| favorite_places | ref (multi, non-restricted)            |
| birthdate       | instant                                |

## Residence

| name           | type                               |
| -------------- | ---------------------------------- |
| street_address | string                             |
| city           | ref (restrict to city collections) |

## Business

| name           | type                               |
| -------------- | ---------------------------------- |
| business_name  | string                             |
| street_address | string                             |
| city           | ref (restrict to city collections) |

## City

| name      | type    |
| --------- | ------- |
| city_name | string  |
| state     | tag (?) |
