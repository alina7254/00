package hk.burunduchan.service

import hk.burunduchan.dto.PostDto
import hk.burunduchan.model.Board
import hk.burunduchan.model.Post
import hk.burunduchan.repository.BoardRepository
import hk.burunduchan.repository.PostRepository
import hk.burunduchan.repository.ThreadRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime


@Service
class PostService(
    private val postRepository: PostRepository,
    private val threadRepository: ThreadRepository,
    private val boardRepository: BoardRepository) {

    fun getPostsByBoard(boardName: String): List<Post> {
        return postRepository.findAllByBoardName(boardName)
    }

    fun getPostByPostNumber(postNumber: Int) : List<Post> {
        return postRepository.findByPostNumber(postNumber)
    }

    fun getReplies(replyToId: Int): List<Post> {
        return postRepository.findByReplyTo(replyToId)
    }

    fun createPost(
        id: Int,
        content: String,
        postNumber: String,
        timestamp1: Board,
        timestamp: LocalDateTime,
        boardName: String,
    ): PostDto? {

        val thread = threadRepository.findById(id.toString())
        val board =  boardRepository.findByName(boardName)
        val post = Post(
            id = id,
            content = content,
            postNumber = postNumber,
            timestamp = timestamp,
            board = board,
            thread = thread
        )
        val savedPost = postRepository.save(post)
        return savedPost.board?.let {
            PostDto(
                id = savedPost.id,
                content = savedPost.content,
                timestamp = savedPost.timestamp,
                postNumber = savedPost.postNumber,
                board = it,
                thread = it,
                replyTo = it
                )
        }
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
