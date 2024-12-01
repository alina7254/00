package hk.burunduchan.dto

import hk.burunduchan.model.Board
import hk.burunduchan.model.Post
import java.io.File
import java.time.LocalDateTime

data class PostDto(
    val id: Int,
    val content: String? = null,
    val author: String,
    val timestamp: LocalDateTime = LocalDateTime.now(),
    val op: Boolean = false,
    val postNumber: Int,
    val title: String? = null,
    val blob: String? = null,
    val board: BoardDto,
    val replyTo: Post
)