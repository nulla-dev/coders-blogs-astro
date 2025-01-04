import _ from 'lodash'
import dayjs from 'dayjs'

export const orderBySticky = (blogs: any) => {
  let handlePosts = blogs.map((blog: any) => {
    blog.sticky = blog.data.sticky ? blog.data.sticky : 0
    blog.dateTimestamp = dayjs(blog.data.date).valueOf()

    return blog;
  })
  return _.orderBy(handlePosts, ['sticky', 'dateTimestamp'], ['desc', 'desc'])
}
