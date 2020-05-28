# DB Schema for Dungeon World database

## Monsters data

### Collections

#### Environments

| Predicate | Type   |
| --------- | ------ |
| name      | string |

#### Monsters

| Predicate         | Type           |
| ----------------- | -------------- |
| name              | string         |
| environment       | ref            |
| hp                | int            |
| attack_tags       | tag (multi)    |
| monster_tags      | tag (multi)    |
| description       | string         |
| armor             | string         |
| attack            | string         |
| damage            | string         |
| instinct          | string         |
| moves             | string (multi) |
| page              | int            |
| special_qualities | string         |
| url               | string         |

### Example add monster transaction

```
    {
      "_id": "monsters$3",
      "armor": "1",
      "attack": "Trusty knife",
      "attack_tags": "Close",
      "damage": "b[2d10]",
      "description": "Better to rule in hell than serve in heaven. ",
      "hp": "12",
      "instinct": "To lead",
      "monster_tags": "Solitary, Intelligent, Organized",
      "moves": ["Make a demand", "Extort", "Topple power"],
      "name": "Bandit King",
      "page": 314,
      "special_qualities": "",
      "url": "http://www.dungeonworldsrd.com/monsters#TOC-Bandit-King"
    },
```
