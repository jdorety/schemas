# Comics schema planning

- Titles
    - Name (string, unique?)
    - Publisher (ref, restrict publisher)
- Publishers
    - Name (string)
- Books
    - Title (ref, restrict titles)
    - Publisher (ref, restrict publishers)
    - Release date (date)
    - description (string)
    - creators (string)
    - price (string, maybe number?)
    - diamond id (string)

## Let's start simpler

- Titles
    - Name (string)
    - Publisher (ref, restrict publishers)
- Publishers
    - Name (string)
- Books
    - Title ()