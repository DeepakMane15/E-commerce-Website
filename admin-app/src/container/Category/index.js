import { Button } from 'bootstrap'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../actions'
import Layout from '../../components/Layout'

/**
* @author
* @function Category
**/

const Category = (props) => {
  
  const dispatch = useDispatch();
  const category = useSelector(state=> state.category)

  useEffect(() => {
      dispatch(getCategories());
  })

  const renderCategories = (categories) => {
      let mycategories = [];
      for (let category of categories) {
        mycategories.push(
            <li key={category.name}>
                {category.name}
            </li>
        )
      }
      return mycategories;

  }

    return(
      <Layout sidebar>
          <Container>
              <Row>
                  <Col md={12}>
                  <div style={{display: 'flex', justifyContent: "space-between"}}>
                      <h3> Category</h3>
                      <button>Add</button>
                  </div>

                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <ul>
                      {renderCategories(category.categories)}
                  </ul>
                  
                  </Col>
              </Row>
          </Container>
          </Layout>
   )

 }

export default Category