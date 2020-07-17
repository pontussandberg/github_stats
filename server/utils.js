const merger = arr => {
    const obj = {};
    arr.forEach(x => {
        for (let key in x) {
            obj[key] = obj[key] !== undefined
                ? obj[key] + x[key]
                : x[key];
        }
    })
    return obj;
};

const formatCommits = arr => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    const result = {
        count: 0,
        perMonth: {},
    }
    months.forEach(x => result.perMonth[x] = 0);

    arr.forEach(x => {
        result.count += x.length;
        x.forEach(y => {
            const monthNr = (parseInt(y.commit.author.date.slice(5, 7)) - 1);
            result.perMonth[months[monthNr]] += 1;
        });
    });
    return result;
}

const createColorSchema = (languages, colors) => {
    let other = false;

    const colorsSchema = Object.keys(languages).map(key => {
        if (!colors[key]) {
            other = true;
            return false;
        }
        return colors[key];
    });

    const filtered = colorsSchema.filter(x => x !== false);
    if (other) return [...filtered, colors.other]
    return filtered;
}

const createLanguageSchema = (languages, colors) => {
    let other = 0;
    const languagesSchema = Object.keys(languages).map(k => {
        if (colors[k]) return languages[k];
        other += languages[k];
        return false
    })

    const filtered = languagesSchema.filter(x => x !== false);
    if (other) return [...filtered, other]
    return filtered;
}

const createLabelSchema = (languages, colors) => {
    let other = false;
    const languagesSchema = Object.keys(languages).map(k => {
        if (colors[k]) return k;
        other = true;
        return false
    })

    const filtered = languagesSchema.filter(x => x !== false);
    if (other) return [...filtered, 'Other']
    return filtered;
}

const createChartSchema = languages => {
    colors = {
        JavaScript: '#F1E25A',
        Python: '#3573A5',
        Java: '#B07319',
        TypeScript: '#2C7389',
        CSS: '#563D7C',
        HTML: '#e34d25',
        other: '#747474',
    }

    const result = {};

    result.labels = createLabelSchema(languages, colors);
    result.languages = createLanguageSchema(languages, colors);
    result.colors = createColorSchema(languages, colors);

    return result;
}


module.exports = {
    merger,
    formatCommits,
    createChartSchema,
};