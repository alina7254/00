package hk.burunduchan.service

import hk.burunduchan.model.Post
import hk.burunduchan.repository.PostRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional


@Service
class PostService(private val postRepository: PostRepository) {

    fun getPostsByBoard(boardName: String): List<Post> {
        return postRepository.findAllByBoardName(boardName)
    }

    fun getPostByPostNumber(postNumber: Int) : List<Post> {
        return postRepository.findByPostNumber(postNumber)
    }

    fun getReplies(replyToId: Int): List<Post> {
        return postRepository.findByReplyTo(replyToId)
    }

    fun createPost(post: Post) : Post {
        return postRepository.save(post)
    }

    @Transactional
    fun updatePost(postNumber: Int) : Post {
        val existingPost = postRepository.findByPostNumber(postNumber)
        if (existingPost.equals(postNumber)) {
          val postToUpdate = existingPost[postNumber]
            postToUpdate.title
            postToUpdate.op
            postToUpdate.author
            postToUpdate.content
            postToUpdate.blob
            return postRepository.save(postToUpdate)
        } else {
            throw RuntimeException("Post with number $postNumber not found");
        }
    }

    fun deletePost(postNumber: Int) {
        if (postRepository.existsById(postNumber)) {
            postRepository.deleteById(postNumber)
        } else {
            throw RuntimeException("Post with number $postNumber not found")
        }
    }
}
