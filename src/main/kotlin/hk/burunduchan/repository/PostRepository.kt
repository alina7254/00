package hk.burunduchan.repository

import hk.burunduchan.model.Post
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository


@Repository
interface PostRepository : JpaRepository<Post, Int> {
    @Query("SELECT p FROM Post p WHERE p.board.name = :boardName")
    fun findAllByBoardName(@Param("boardName") boardName: String): List<Post>
    @Query("SELECT p FROM Post p WHERE p.replyTo.id = :replyToId")
    fun findByReplyTo(@Param("replyToId") replyToId: Int): List<Post>
    fun findByPostNumber(postNumber: Int): List<Post>

}

