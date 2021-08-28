export const getState = (city = 'Recife') => {
    switch (city) {
        case 'Dallol':
            return 'NG';
        case 'Fairbanks':
            return 'US';
        case 'Londres':
            return 'GB';
        case 'Recife':
            return 'BR';
        case 'Vancouver':
            return 'CA';
        case 'Yakutsk':
            return 'RU';
    }
}