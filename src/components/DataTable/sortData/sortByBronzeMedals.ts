const sortByBronzeMedals = (data: any) => {
    const sorted = data.sort((a: any, b: any) => {

        if (a.bronzeMedals > b.bronzeMedals) {
            return -1
        }
        if (a.bronzeMedals < b.bronzeMedals) {
            return 1
        }
        return 0
    }

    )
    return sorted
}

export default sortByBronzeMedals