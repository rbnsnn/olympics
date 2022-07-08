const sortByGoldMedals = (data: any) => {
    const sorted = data.sort((a: any, b: any) => {
        if (a.goldMedals > b.goldMedals) {
            return -1
        }
        if (a.goldMedals < b.goldMedals) {
            return 1
        }
        if (a.goldMedals === b.goldMedals) {
            if (a.silverMedals > b.silverMedals) {
                return -1
            }
            if (a.silverMedals < b.silverMedals) {
                return 1
            }
            if (a.silverMedals === b.silverMedals) {
                if (a.bronzeMedals > b.bronzeMedals) {
                    return -1
                }
                if (a.bronzeMedals < b.bronzeMedals) {
                    return 1
                }
                return 0
            }
            return 0
        }
        return 0
    })
    return sorted
}

export default sortByGoldMedals