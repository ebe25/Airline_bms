# Welcome to Airline_BMS Flights_Service

    -to setup this project locally do:
        1. yarn install
        2. start the db service in docker-compose file
            - docker compose up -d
            - docker compose ps //check for running containers
        3. Create your .env file in the root folder
            ```
                PORT = 8000
                NAME= AIRLINE_SERVER
                DB_SCHEMA = FLIGHT_SERVICE
                DB_HOST= localhost
                DB_PORT= 5432
                DB_USER= vedu_phone_lookup
                DB_PASSWORD= vedansh@25
                DB_NAME=FLIGHT_SERVICE

                DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=${DB_SCHEMA}
            ```
                -make sure to make changes if you have changed your creds, ports and stuff in docker file
            -- MAKE SURE TO CHANGE THE DATABASE_URL IN THE.ENV FILE TO YOUR OWN DATABASE URL --
        4. yarn run dev //to start the server
        - yarn run seed //for initial seedings

            --MAKE SURE TO MIGRATE YOUR MODEL CHANGES USING: 
                - npx migrate dev --name "<NAME_OF_YOUR_MIGRATION>

## Folder Structure

    1. Role based
    - src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repositary/
    - tests/ [later]
