const sortBySilverMedals = (data: any) => {
    const sorted = data.sort((a: any, b: any) => {

        if (a.silverMedals > b.silverMedals) {
            return -1
        }
        if (a.silverMedals < b.silverMedals) {
            return 1
        }
        return 0
    }

    )
    return sorted
}

export default sortBySilverMedals