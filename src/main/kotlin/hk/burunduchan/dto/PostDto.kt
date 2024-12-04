package hk.burunduchan.dto

import hk.burunduchan.model.Board
import java.time.LocalDateTime

data class PostDto(
    val id: Int,
    val content: String? = null,
    val author: String? = null,
    val timestamp: LocalDateTime = LocalDateTime.now(),
    val op: Boolean? = false,
    val postNumber: String,
    val title: String? = null,
    val blob: String? = null,
    val board: Board,
    val thread: Board,
    val replyTo: Board
)