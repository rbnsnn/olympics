import MedalDataType from '../../../types/MedalDataType'

const sortByBronzeMedals = (data: MedalDataType[]): MedalDataType[] => {
    const sorted = data.sort((a: MedalDataType, b: MedalDataType): number => {

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