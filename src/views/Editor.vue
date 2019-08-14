<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="addArticle">
            <fieldset>
              <fieldset class="form-group">
                  <input v-model="newArticle.article.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                  <input v-model="newArticle.article.description" type="text" class="form-control" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                  <textarea v-model="newArticle.article.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                  <input v-model="newArticle.article.tagList" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
                  Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { value } from 'vue-function-api';

export default {
  name: 'Editor',
  setup() {
    const newArticle = value({
      article: {
        title: '', description: '', body: '', tagList: [],
      },
    });

    const addArticle = () => {
    };

    return {
      newArticle,
      addArticle,
    };
  },
};
</script>
