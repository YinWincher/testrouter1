import AllGoods from '../../components/AllGoods';
import AddGood from '../../components/AddGood';
import NotFound from '../../components/NotFound';

const route = [
	{
		path:'',
        component:AllGoods,

	},
    {
        path:'allGoods',
        // component: (resolve)=>import('../../components/AllGoods'),
	    component : AllGoods,
        meta :{
            a:132
        }
    },
    {
        path:'addGood',
        component:AddGood
    },
	{
		path:'*',
		component:NotFound
	}
]

export default route;
