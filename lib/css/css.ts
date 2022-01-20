export class CSS {
    static unparse = (input: string): object => {
        if (!input?.length) return {};
        const output = {};
        input.split(';').forEach(p => {
            const [key, value] = p.split(':');
            output[key] = value;
        })
        return output;
    }

    static parse = (input: object): string => {
        const keys = Object.keys(input);
        const values = Object.values(input);
        const length = keys.length;
        let output = '';
        for (let i = 0;i < length;i++) {
            output += `${keys[i]}:${values[i]};`;
        }
        return output;
    }
}
