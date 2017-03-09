import React, {PropTypes, PureComponent} from 'react';
import AutocompleteText from 'focus-components/autocomplete-text/edit';

const _querySearcher = query => {
    let data = [
        {
            key: 'JL',
            label: 'Joh Lickeur'
        },
        {
            key: 'GK',
            label: 'Guénolé Kikabou'
        },
        {
            key: 'YL',
            label: 'Yannick Lounivis'
        }
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data,
                totalCount: data.length
            });
        }, 500);
    });
};

const _querySearcher2 = query => {
    let data = [];
    if(data.length == 0) {
        data =  [
            {
                key: 'ERR',
                label: 'Oops, no data to show here...'
            }
        ];
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data,
                totalCount: data.length
            });
        }, 500);
    });
};

const _querySearcher3 = query => {
    let data = [];
    return Promise.reject({
        data,
        totalCount: data.length
    });
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({
                data,
                totalCount: data.length
            });
        }, 500);
    });
};

class AutocompleteTextExample extends PureComponent {
    state = {isEdit: true};
    render() {
        const {isEdit} = this.state;
        return (
            <div>
                <AutocompleteText
                    isEdit={isEdit}
                    querySearcher={_querySearcher}
                    placeholder={'Your search...'}
                    />
                <br/>
                <AutocompleteText
                    isEdit={isEdit}
                    querySearcher={_querySearcher2}
                    placeholder={'Custom dropdown failed results...'}
                    />
                <br/>
                <AutocompleteText
                    isEdit={isEdit}
                    querySearcher={_querySearcher3}
                    placeholder={'Error in the field...'}
                    error='This field is required'
                    />
                <br/>
            </div>
        );
    }
}

export default AutocompleteTextExample;
