package hk.burunduchan.repository

import hk.burunduchan.model.Post
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param


@Repository
interface PostRepository : JpaRepository<Post, Int> {
    @Query("SELECT p FROM Post p WHERE p.board.id = :boardId")
    fun findByBoard(@Param("boardId") boardId: Int?): List<Post>

    @Query("SELECT p FROM Post p WHERE p.replyTo.id = :replyToId")
    fun findByReplyTo(@Param("replyToId") replyToId: Int): List<Post>

    fun findByPostNumber(postNumber: Int): List<Post>
}

