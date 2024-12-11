package hk.burunduchan.dto

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable

@Serializable
data class PostDto(
    val id: Int,
    val content: String?,
    val author: String?,
    val timestamp: String,
    val op: Boolean?,
    @Contextual
    val postNumber: Int.Companion,
    val title: String?,
    val blob: String?,
    val board: String?,
    val thread: String?,
    val replyTo: String
)