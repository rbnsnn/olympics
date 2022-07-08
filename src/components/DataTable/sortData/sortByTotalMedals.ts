const sortByTotalMedals = (data: any) => {
    const sorted = data.sort((a: any, b: any) => {

        if (a.totalMedals > b.totalMedals) {
            return -1
        }
        if (a.totalMedals < b.totalMedals) {
            return 1
        }
        return 0
    }

    )
    return sorted
}

export default sortByTotalMedals