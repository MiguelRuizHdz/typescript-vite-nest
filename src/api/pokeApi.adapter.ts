import axios from 'axios';

export class PokeApiFetchAdapter {

    async get<T>( url: string ): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();

        return data;
    }

}

export class PokeApiAdapter {

    private readonly axios = axios; 

    async get<T>( url: string ): Promise<T> {
        // petición get
        const { data } = await this.axios.get<T>(url);
        return data;
    }
    
    async post( url: string, data: any ) {
        // petición post
        return;
    }

    async patch( url: string ) {
        // petición patch
        return;
    }
    
    async delete( url: string ) {
        // petición delete
        return;
    }

}
