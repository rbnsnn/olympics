import sortByGoldMedals from "./sortByGoldMedals"
import sortBySilverMedals from "./sortBySilverMedals"
import sortByBronzeMedals from "./sortByBronzeMedals"
import sortByTotalMedals from "./sortByTotalMedals"

const sortMedals = (data: any, sortBy: any) => {

    switch (sortBy) {
        case 'goldMedalsDescending':
            return sortByGoldMedals(data)
        case 'goldMedalsAscending':
            return sortByGoldMedals(data).reverse()

        case 'silverMedalsDescending':
            return sortBySilverMedals(data)
        case 'silverMedalsAscending':
            return sortBySilverMedals(data).reverse()

        case 'bronzeMedalsDescending':
            return sortByBronzeMedals(data)
        case 'bronzeMedalsAscending':
            return sortByBronzeMedals(data).reverse()

        case 'totalMedalsDescending':
            return sortByTotalMedals(data)
        case 'totalMedalsAscending':
            return sortByTotalMedals(data).reverse()

    }
}

export default sortMedals