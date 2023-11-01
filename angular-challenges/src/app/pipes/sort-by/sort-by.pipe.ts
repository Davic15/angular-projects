import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    public transform(value: string[], isAscending = true): string[] {
        if (value === null || value === undefined ) {
            return value;
        }

        if(!Array.isArray(value)) {
            throw new Error('Sort by pipe requires an array.');
        }

        return value.sort((a, b) => {
            const upperCase1 = a.toUpperCase();
            const upperCase2 = b.toUpperCase();
            if(upperCase1 < upperCase2) {
                return isAscending ? -1 : 1;
            }
            if(upperCase1 > upperCase2) {
                return !isAscending ? -1 : 1;
            }

            return 0;
        })
    }
}