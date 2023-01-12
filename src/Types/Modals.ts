export type ShowMainType = {
    show: {
        id:             number;
        url:            string;
        name:           string;
        type:           string;
        language:       string;
        genres:         string[];
        status:         string;
        runtime:        number;
        averageRuntime: number;
        premiered:      Date;
        ended:          Date;
        image       :  {
                        medium:   string;
                        original: string;
                        };
        summary     :   string;
        updated:        number;
        _links      :     {
            self:            {href: string };
            previousepisode: {href: string};
        }
    }

}
export type Show  =  {
    id              :   number;
    url             ?:   string;
    name            :   string;
    type            ?:   string;
    language        ?:   string;
    genres          ?:   string[];
    status          ?:   string;
    runtime         ?:   number;
    averageRuntime  ?:   number;
    premiered       ?:   Date;
    ended           ?:  Date;
    image           :  {
                        medium:   string;
                        original: string;
                        };
    summary         :  string;
    updated         ?: number;
    _links          ?:     {
                        self:            {href: string };
                        previousepisode: {href: string};
                        }
    rating          ?: {
                average : number ,
                },
    }

export  type castType = {
    person : {
            id    : number ,
            name : string ,
            image :  {
                medium:   string;
                original: string;
                };
        },
    
    }
    export type cast = {
        id    : number ,
        name : string ,
        image :  {
            medium:   string;
            original: string;
            };
    }

    export const Placeholder = 'data:image/png;base64,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';
