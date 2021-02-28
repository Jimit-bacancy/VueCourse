let timer;

export default {
    async signup(context, payload){
        return context.dispatch('auth',{
            ...payload,
            mode: 'signup'
        });
    },
    async login(context, payload) {
        return context.dispatch('auth',{
            ...payload,
            mode: 'login'
        });
    },
    async auth(context, payload){
        const mode = payload.mode;
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8zdG3_Fqct4-4xcPTYWincWAj_KAVNf0";
        if(mode === 'signup'){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8zdG3_Fqct4-4xcPTYWincWAj_KAVNf0';
        }
        const response = await fetch(url,{
            method:'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            }),
        });
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to login.');
            throw error;
        }
        const expiresIn = +responseData.expiresIn * 1000;
        // const expiresIn = 6000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(() =>{
            context.dispatch('autoLogout'); 
        }, expiresIn)
        //console.log(responseData);
        context.commit('setUser',{
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
    tryLogin(context){
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const expiresIn = +tokenExpiration - new Date().getTime();

        if(expiresIn < 0){
            return;
        }
        timer = setTimeout(() => {
            context.dispatch('autoLogout');
        }, expiresIn);
        if(token && userId){
            context.commit('setUser',{
                token: token,
                userId: userId,
            });
        }
    },
    logout(context){
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');
        clearTimeout(timer);
        context.commit('setUser',{
            token: null,
            userId: null,
        });
    },
    autoLogout(context){
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};