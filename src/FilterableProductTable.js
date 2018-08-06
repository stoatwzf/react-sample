import React from 'react';
import listJson from '../public/select.json';

class SearchBar extends React.Component {
	textChange = event => {
		this.props.onChange({
			filterText: event.target.value
		});
	}
	stockChange = event => {
		this.props.onChange({
			inStockOnly: event.target.checked
		});
	}
	render (){
		return (<div className="searchBar">
			<input value={this.props.filterText} onChange={this.textChange} />
			<br />
			<input type="checkbox" checked={this.props.inStockOnly} onChange={this.stockChange} />
			<label>Only show products in stock.</label>
		</div>);
	}
}
const ProductCategoryRow = props => {
	return <h4>{props.title}</h4>;
};
const ProductRow = props => {
	return (<ul>
		{props.list.map(val => <li>{val.name}</li>)}
	</ul>);
};
class ProductTable extends React.Component {
	groupList = list => {
		const typeArr = [];

		for (const val of list.values()){
			if (!typeArr.includes(val.category)){
				typeArr.push(val.category);
			}
		}
		for (const [ind, val] of typeArr.entries()){
			typeArr[ind] = {
				title: val,
				data: []
			}
			for (const value of list.values()){
				if (value.category === val){
					typeArr[ind].data.push(value);
				}
			}
		}
		return typeArr;
	}

	render (){
		const productList = this.groupList(this.props.productList);

		return (<div className="productTable">
			{productList.map(val => (
				<div>
					<ProductCategoryRow title={val.title} />
					<ProductRow list={val.data} />
				</div>
			))}
			
		</div>);
	}
}
class FilterableProductTable extends React.Component {
	state = {
		filterText: '',
		inStockOnly: false,
		productList: []
	}

	componentDidMount (){
		const productList = listJson.filter(val => {
			if (val.stocked === this.state.inStockOnly){
				return true;
			}
		});

		this.setState({
			productList
		});
	}

	changeHandler = val => {
		this.setState(val);
		this.setState(prev => {
			const productList = listJson.filter(val => {
				if (val.stocked === prev.inStockOnly){
					return true;
				}
			});

			return {
				productList
			}
		});
	}

	render (){
		return (<div className="filterable">
			<SearchBar
				filterText={this.state.filterText}
				inStockOnly={this.state.inStockOnly}
				onChange={this.changeHandler}
			/>
			<ProductTable productList={this.state.productList}  />
		</div>);
	}
}
export default FilterableProductTable;